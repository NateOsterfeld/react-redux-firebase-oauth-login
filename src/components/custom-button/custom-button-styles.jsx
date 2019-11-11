import styled, { css } from 'styled-components'
const white = '#f8f9fa'


const invertedButtonStyles = css`
    background-color: ${white};
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: ${white};
        border: none;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: ${white};
    border: none;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const modalButtonDelte = css `
    color: ${white};
    background-color: #dc3545;
    border: none;
    
    &:hover {
        background-color: #c82333;
        color: ${white};
        border-bottom: none;
    }
`

const modalButtonCancel = css `
    color: #212529;
    background-color: $white;

    ${invertedButtonStyles}
`

const ButtonStyles = css `
    color: ${white};
    background-color: black;
    border: none;

    &:hover {
		color: black;
		background-color: ${white};
		border: 1px solid black;
    }
`

const getButtonStyles = props => {
    let { classNames } = props
    switch (classNames) {
        case 'google-sign-in': return googleSignInStyles
        case 'modal-btn-delete': return modalButtonDelte
        case 'modal-btn-cancel': return modalButtonCancel
        case 'inverted': return invertedButtonStyles
        default: return ButtonStyles
    }
}

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

    ${getButtonStyles}
`
