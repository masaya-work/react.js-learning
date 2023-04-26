/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";//styled Componentのような書き方をする場合に記載

/* emotionでの記述方法は大まかに3つある */

export const Emotion = () => {
    //↓emotionに用意されているcssで書くので、scssで記述可能
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    const titleStyle = css({//jsのオブジェクト（インラインスタイル）として定義。キャメルケースや文字列で記述
        margin: 0,
        color: "#aaa"
    });
    // ↓styled Componentと同じように記載
    const SButton = styled.button`
        background-color: #ddd;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover {
        background-color: #aaa;
        color: #fff;
        cursor: pointer;
        }
    `;
    return (
        <>
            <div css={containerStyle}>
                <p css={titleStyle}>Emotionです</p>
                <SButton>ボタン</SButton>
            </div>
        </>
    )
}