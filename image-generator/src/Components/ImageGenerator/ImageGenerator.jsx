import React, { useRef, useState } from 'react';
import './ImageGenerator.css';

// eslint-disable-next-line
import default_Image from '../Assets/default_image.svg';

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/");
    const inputRef = useRef(null);
    const [loading,setLoading]=useState(false);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
        setLoading(true);
        // Do something with the input value
        const response = await fetch(
            // "add your open ai link here",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: "add your open ai key here",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: inputRef.current.value,
                    n: 1,
                    size: "512x512",
                }),
            }
        );

        let data = await response.json();
        let data_array=data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }

    return (
        <div className="ai-image-generator">
            <div className="header">
                AI image<span>generator</span>
            </div>

            <div className="img-loading">
                <div className="image"><img src={image_url === "/" ? default_Image : image_url} alt="" /></div>
            <div className="loading">
                <div className={loading?"loading-bar-full":"loading-bar"}></div>
                <div className={loading?"loading-text":"display-none"}>Loading....</div>
            </div>
            </div>

            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Unleash Your Imagination' />
                <div className="generate-btn" onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;
