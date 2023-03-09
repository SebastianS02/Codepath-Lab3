import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked, currentVal }) => {
    return (
        <div className="radio-buttons">
            {choices && choices.map((choice) => (
                <li key={choice}>
                    
                    <input 
                        id={choice}
                        value={choice}
                        name={label}    this is all for listed choices
                        type="radio"
                        onChange={handleChange}
                        checked={checked == choice}
                    />
                    {/*
                    <input
                        type="text"
                        name={label}
                        value={currentVal}
                        placeholder="Guess the ingredient..."
                        onChange={handleChange}
                        className="textbox"
                    />
                    */}
                    {choice}
                </li>
            ))}
        </div>
    );
};

export default RecipeChoices;