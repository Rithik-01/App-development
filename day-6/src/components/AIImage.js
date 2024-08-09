import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../helpers/ImageHelper';
import './AIImage.css';

const AIImage = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyCZBzi2InkYwj0Xk0k409bcB_x9BgSwZ8s');

    const [image, setImage] = useState('');
    const [imageInlineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiImageRun() {
        setLoading(true);
        setResponse('');

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        try {
            const result = await model.generateContent([
                `You are an expert nutritionist with the capability to analyze food items in an image. Please perform the following tasks based on the image provided:

1. **Food Item Identification:**
   - Carefully examine the image and identify all visible food items. List each distinct food item found in the image.

2. **Calorie Estimation:**
   - For each identified food item, estimate the calorie content. Provide an approximate calorie range for each item.

3. **Output Format:**
   - Format the results as follows:
     1. **Item 1** - Approximately X calories
     2. **Item 2** - Approximately Y calories
     - ...

4. **Total Calorie Count:**
   - Calculate the total estimated calories by summing up the approximate calories for all identified food items.

5. **Nutritional Information:**
   - Provide an estimate of the carbs, fats, protein in the meal in grams.

**Guidelines:**
- If the food item is not recognizable, provide a generic estimate based on common foods of similar appearance.
- Ensure all estimates are as accurate as possible, but approximate ranges are acceptable.
- Your goal is to provide a comprehensive nutritional breakdown based on visual analysis.`,
                imageInlineData,
            ]);

            const response = await result.response;
            const text = response.text();
            setResponse(text);
        } catch (error) {
            console.error('Error generating AI response:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleClick = () => {
        aiImageRun();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch((e) => console.log(e));

        fileToGenerativePart(file)
            .then((image) => {
                setImageInlineData(image);
            });
    };

    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: {
                data: await base64EncodedDataPromise,
                mimeType: file.type,
            },
        };
    }

    const renderAIResponse = (response) => {
        const lines = response.split('\n').filter(line => line.trim() !== '');
        const sections = [];
        let currentSection = [];

        lines.forEach((line, index) => {
            if (line.startsWith('##') || index === lines.length - 1) {
                if (currentSection.length > 0) {
                    sections.push(currentSection);
                    currentSection = [];
                }
            }
            currentSection.push(line);
        });

        return sections.map((section, index) => (
            <div className="response-section" key={index}>
                {section.map((line, lineIndex) => {
                    if (line.startsWith('##')) {
                        return <h3 className="response-header" key={lineIndex}>{line.replace(/##/g, '').trim()}</h3>;
                    }
                    if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.') || line.startsWith('5.') || line.startsWith('6.') || line.startsWith('7.')) {
                        return <h4 key={lineIndex}>{line}</h4>;
                    }
                    if (line.startsWith('*')) {
                        return <ul key={lineIndex}><li>{line.slice(1).trim()}</li></ul>;
                    }
                    if (line.includes(':')) {
                        const parts = line.split(':');
                        return <p key={lineIndex}><strong>{parts[0]}:</strong>{parts[1]}</p>;
                    }
                    return <p key={lineIndex}>{line}</p>;
                })}
            </div>
        ));
    };

    return (
        <div className="container">
            <div className="file-input-container">
                <label className="custom-file-input">
                    Upload Image
                    <input type="file" onChange={(e) => handleImageChange(e)} />
                </label>
                <button className="custom-button" onClick={handleClick}>
                    Search
                </button>
            </div>
            {image && <img src={image} className="image-preview" alt="Upload Here" />}
            {loading && aiResponse === '' ? (
                <p className="loading-text">Loading ...</p>
            ) : (
                <div className="response-container">
                    {renderAIResponse(aiResponse)}
                </div>
            )}
        </div>
    );
};

export default AIImage;
