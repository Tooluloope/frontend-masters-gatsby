import React, { useState } from 'react';
import { css } from '@emotion/core';

export const Wave = () => {
    const [waves, setWaves] = useState(0)
    return(
        <button
            css = {css`
            background: rebeccapurple;
            color:white;
            padding: 1.15rem;
            `}
            onClick = {() => setWaves(waves + 1)}
        >
            <span role= 'img' aria-label='emoji'> 👋 👋 {waves} {`${waves===1 ? 'wave': 'waves'}`}</span>
        </button>

    )
}