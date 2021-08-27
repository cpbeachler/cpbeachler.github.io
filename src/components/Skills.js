import React from "react";
import './CSS/skills.css'
const Skills = () => {

    return (
        <div className='allSkill'>
            <h3>Skills</h3>
            <div className='skillHolder'>
                <svg className='svgIcon' viewBox="0 0 128 128" >
                    <path  d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01-6.49-7.92-11.49-17.1-14.9-26.74-2.07-6.27-2.77-12.99-5.44-19.02-2.78-4.38.48-9.16 5.27-10.55 2.13-.41 5.89-2.43 1.36-.98-4.06 2.98-4.45-2.71-.29-3.07 2.84-.38 3.89-2.7 2.92-4.8-3.05-1.99 7.4-4.18 2.14-7.15-5.48-5.91 7.66-7.05 4.42-.33-.77 5.16 9.18-.95 6.87 5.01 2.35 2.86 8.8.65 8.63 4.67 3.42.24 4.6 3.11 7.8 3.33 3.33 1.5 9.36 2.69 10.49 6.44-3.3 2.61-10.95-5.4-11.31 1.84 1 10.69.74 21.7 4.65 31.88 1.85 6.16 6.33 11.01 10.38 15.81 3.88 4.7 9.12 8.01 14.48 10.8 4.69 2.21 9.75 3.68 14.87 4.6 2.07-1.59 5.74-7.48 8.97-5 .16 2.8-6.42 5.84-.31 5.54 3.59-1.08 6.08 2.77 9.04-.71 2.72 3.23 11.32-2.06 9.38 4.53-2.62 1.69-6.44.67-9.07 3-4.33-2.16-7.77 1.93-12.56 1.42-5.32.95-10.73 1.34-16.13 1.34-8.85-.7-17.89-.99-26.3-4.07-4.74-1.38-9.37-4.08-13.53-6.78zm7.47 3.24c4.63 2 9.16 4.11 14.23 4.75 8.05 1.12 16.37 2.84 24.45 1.27-3.66-1.65-7.44.64-11.08-1.18-4.37.94-9.06-.24-13.5-.82-5.05-2.25-10.5-3.8-15.23-6.72-5.91-2.16 3.06 2.77 4.65 3.17 3.69 2.1-4.06-1.08-5.16-1.95-3.09-1.74-3.49-1.37-.31.39.64.37 1.28.77 1.95 1.09zm-8.81-6.23c4.49 1.66-.02-3.16-2.07-2.88-.91-1.58-3.48-2.58-1.67-3.43-3.26 1.13-3.42-4.3-4.95-3.53-3.45-1.09-1.34-4.95-5.45-7.32-.37-2.5-4.08-4.66-5.26-8.43-.52-1.93-4.19-7.46-1.94-2.31 1.92 4.96 5.29 9.21 8.1 13.45 2.18 4.04 4.76 8.26 8.72 10.78 1.34 1.3 2.63 3.27 4.52 3.67zM30.17 83.45c.16-.68.82 1.46 0 0zm18.3 16.18c1-.44-1.43-.56 0 0zm2.44.89c-.25-1.23-1.11.69 0 0zm3.05 1.27c1.45-1.38-2.24-.87 0 0zm5.22 2.91c.89-1.3-2.82-.49 0 0zm-10.03-6.99c2.25-1.46-2.91-.02 0 0zm2.29 1.14c-.07-.77-.82.34 0 0zm11.43 7.13c1.84 1.16 10.73 2.54 5.16.48-.93.2-10.33-2.66-5.16-.48zM44.72 91.85c-.18-.77-2.85-.85 0 0zm5.32 3.1c1.39-.96-2.87-.74 0 0zm4.48 2.75c1.98-.75-3.23-.75 0 0zm-11.97-8.21c2.16 1.65 8.7.21 3.3-.99-2.45-1.31-7.99-2.2-4.22.79l.92.2zm15 9.16c.9-1.53-3.77-.88 0 0zm-4.56-3.63c5.27 1.49-4.43-3.34-1.3-.55l.7.32.6.23zm9.14 5.28c4.99.05-4.51-.68 0 0zm-21.5-13.7c-.19-.93-1.23.08 0 0zm29.94 18.44c.14-1.68-1.62 1.25 0 0zM49.15 91.82c-.3-.88-1.56-.04 0 0zm-8.04-5.8c2.86-.17-3.93-1.26 0 0zm-9.54-6.16c-.36-1.38-3.12-2.47 0 0zM56.6 95.74c-.52-.6-.25.13 0 0zm15.58 9.56c-.05-.91-.85.35 0 0zM55.22 94.32c.28-1.18-2.44-.36 0 0zm-11.6-7.36c2.13-.23-3.42-1.44 0 0zm19.63 12.2c3.32-1.32-3.24-.64 0 0zm-10.21-6.93c3.83.49-4.56-2.61-.84-.28l.84.28zm13.31 8.19c3.58-2.14 2.4 5.01 6.07.6 3.62-2.64-3.13 3.27 1.33.47 3.23-2.16 7.99 1.02 11 2.06 2.16-.11 4.27 1.87 6.49.67 4.27-1.15-8.36-1.71-5.05-3.75-3.91 1.14-6.8-1.36-8.72-3.86-4.39-1.01-9.46-3.25-11.65-7.14-.89-1.46 1.29.21-.77-2.18-2.64-2.35-3.96-5.02-5.73-7.88-2.12-1.13-2.37-4.46-2.58-.11.02-2.74-2.56-4.59-3.19-3.82-.01-2.64 2.76-1.32.82-3.27-.42-2.74-1.79-5.59-2.2-8.68-.64-1.49-.09-4.68-2.19-1.31-.76 3.57-.25-4.38.94-1.76 1.56-2.67-.56-2.36-.65-1.99 1.02-2.26.64-5.46-.27-4.24.54-2.39.86-8.8-.81-7.66 1.01-2.5 1.92-11.44-2.47-8.03-1.78.03-4.85.64-6.31 1.37 4.56 2.51-.46.91-2.32.51-.24 2.33-2.08 1.32-4.38 1.34 3.67.45-1.79 3.75-3.89 2.47-2.74 1.31 2.36 4.57.05 5.58.28 1.52-4.19-.55-3.84 2.96-2.65-1.12-.36 4.16.96 2.38 4.51 1.22 3.18 4.01 3.29 6.65-.74 1.54-3.63-3.62-.64-3.38-2.36-3.83-2.61-1.38-4.56.39-.45.13 4.99 2.53 1.57 3.72 3.01.47 3.1 3.1 3.71 4.76 1.81 1.88 1.44-2.08 3.6.18-1.37-2.02-7.25-5.68-2.52-4.51-.03-2.03-.86-3.67.6-3.63 1.44-2.6-1.51 6.42 1.73 3.11.9-.39 1.12-2.6 2.73.21 2.34 2.3.85 3.97-2.46 1.86.59 2.01 4.42 2.72 3.7 5.86.76 2.76 1.83 1.74 2.76 1.58.73 2.68 1.14.71 1.18-.57 3.34.72 2.56 2.69 3.6 4.07 2.3 1.04-3.29-7.04.66-2.43 4.16 3.75 1.56 5.32-2.17 4.72 2.36-.19 3.12 3.19 6.07 3.07 2.69 1.28 4.52 6.2-.12 4.15-1.61-1.45-7.31-3.24-2.65-.48 4.3 1.99 7.71 3.18 11.86 5.68 2.96 2.12 4.25 4.54 5.37 5.02-2.49 1.19-7.51-.95-3.78-1.61-2.33-.42-4.94-1.6-2.71 1.3 1.89 1.58 6.71 1.42 7.58 1.59-.73 1.61-1.99 1.74.03 1.86-2.25 1.22.72 1.41.93 2.1zm-4.6-13c-1.37-1.43-1.72-4.11-.24-1.78.75.3 2.43 4.38.24 1.78zm14.99 9.52c.85-.06.02.65 0 0zM59.59 83.91c-.06-2.17.49 1.67 0 0zM58.1 81.9c-1.73-3.32 2.17.95 0 0zM40.04 69.44c1.01-.27.5 1.73 0 0zm14.37 7.79c.62-2.33.73 1.96 0 0zm-10.15-7.06c-.71-1.29 1.5 1.21 0 0zm8.71 2.79c-1.63-3.65 1.16-2 .36.6l-.36-.6zM37.95 62.95c-.73-1.2-1.93-4.72-1.55-5.79.35 1.75 3.72 7.53 1.65 2.39-2.28-4.3 2.73 1.4 3.25 2.47.24 1.07-1.41-.29-.29 2.21-2.04-2.85-1.2 1.58-3.06-1.28zm-4.64-3.2c.19-2.79 1.06 1.91 0 0zm2.08.72c1-2.11 1.69 2.93 0 0zm-5.02-3.89c-1.73-1.72-2.98-3.3.08-1.07 1.18.05-2.62-3.6.28-1.16 3.06.56 1.51 5.01-.36 2.23zm2.64-.07c1-.99.53.98 0 0zm1.62.52c-1.52-2.85 1.85 1.2 0 0zm-3.22-3.08c-5.02-4.47 6.31 2.34.82.83l-.82-.83zm14.39 8.36c-2.18-1.3-.58-9.18.16-3.79 2.11-.68-.12 2.78 1.46 2.75-.24 2.18-.95 2.97-1.62 1.04zm5.33 3.15c.21-2.38.45 1.62 0 0zm-.93-.92c.24-1.01.03 1.2 0 0zM32.39 52.48c-3.23-4.45 9.38 4.51 2.07 1.13-.77-.21-1.69-.28-2.07-1.13zm10.26 5.43c-.31-3.75.68.62 0 0zm7.78 5c.6-2.14.05 1.41 0 0zM32.89 50.78c1.92-.41 7.95 3.37 2.41 1.08-.62-.69-1.93-.38-2.41-1.08zm16.47 8.21c.2-3.84 1.15-2.29.01.55l-.01-.55zm-15.05-9.55c.78-1.15-2.08-5.18.41-1.45 1.08.85 3.11 1.43 1.31 1.79 2.84 2.5-.68.68-1.72-.34zm14.24 8.35c.54-4.37.47 2.56 0 0zM32.68 45.41c.6-.26.32.79 0 0zm3.71 2.21c.96-2.01 1.77 2.23 0 0zm10.47 5.82c0-.77.2 1.12 0 0zm-.6-1.34c-1.45-3.59 1.35 1.9 0 0zm-.89-2.35c-.25-1.48.83 1.86 0 0zm1.45-2.36c-1-1.76 1.26-7.75 1.51-4.03-1.05 2.89-.3 4.51.43.63 1.36-3.06-.29 6.02-1.94 3.4zm1.49-8.91c.44-.53.1.65 0 0zM45.82 87.6c-.59-.52.07.33 0 0zm5.13 2.6c2.86.74 2.84-.44.26-.79-1.39-1.29-5.77-2.66-1.85-.16.27.65 1.09.63 1.59.95zm-10.14-6.74c1.57 1.18 5.93 3.32 2.24.45 1.24-1.44-2.38-2.21-1.18-3.18-3.06-1.87-2.41-1.7-.27-1.64-3.67-1.64.53-1.52.33-2.36-1.42-.28-7.03-2.5-3.73.18-3.36-1.71-.8.64-1.82.39-3.44-.94 3.06 2.62-.54 1.73 1.97 1.56 5.3 4 .83 1.65-.57.85 3.21 2.14 4.14 2.78zm5.37 3.09c6.53 2.1-3.2-2.58 0 0zm27.5 16.65c.08-1.3-.9 1.11 0 0zm2.82 1.19c1.51-1.46.06 2.33 2.5-.36.03-1.92-.07-3.06-2.8-.72-.75.42-1.09 2.19.3 1.08zM31.65 76.22c-.47-1.82-3.25-1.81 0 0zm3.01 1.98c-1.12-1.86-4-1.68 0 0zm17.17 10.35c1.68 1.49 7.7 1.09 2.03.18-.83-1.24-5.32-.94-2.03-.18zm23.6 14.57c2.57-2.16-2.5.97 0 0zm5.36 3.69c.02-.69-1.11.3 0 0zm.01-.97c2.86-3.03-2.77.18 0 0zM24.22 70.01c-2.43-3.47-1.51-5.03-3.86-7.87-.45-2.17-4.03-7.09-1.85-1.88 1.99 3.05 2.58 7.77 5.71 9.75zm55.68 34.87c5.26-3.4-2.15-1.48 0 0zm4.01 1.57c2.64-2.26-1.66-.47 0 0zM30.75 72.38c.76-1.12-1.94-.14 0 0zm52.33 32.99c2.55-1.64-.59-1.39-.46.15l.46-.15zM48.5 83.58c-.09-1.11-1.35.09 0 0zm2.14 1.23c-.69-1.38-1.05.21 0 0zm36.53 21.67c3.27-2.36-1.98-.45-.68.45l.68-.45zm-1.26-.6c2.67-2.23-2.8.99 0 0zm6.39 4.25c1.79-1.19-2.17-.38 0 0zM32.39 71.57c2.39.54 9.56 5.89 5.33.37-2.17-.64-.87-5.94-3.08-5 1.48 2.48 1.22 3.53-1.9 1.97-3.91-1.91-2.2.94-1.43 1.73-1.04.25 1.39.91 1.08.93zm-10.9-8.61c.43-1.77-3.95-9.75-2.07-4 .68 1.21.61 3.49 2.07 4zM41.5 75.3c-1.23-1.03-.06-.15 0 0zm3.03.71c0-1.88-3.35-.77 0 0zm26.3 16.57c-.5-1.28-1.98-.02 0 0zm1.26.93c-.18-.72-.72.14 0 0zm10.43 6.56c1-.74-1.25-.09 0 0zM26.93 64.35c2.87-1.11-3.07-.79 0 0zm41.59 26.2c-.04-1.86-1.83.46 0 0zM25.8 61.71c1.84-.62-1.71-.41 0 0zm5.34 2.59c-.03-.61-.56.23 0 0zm65.22 39.99c2.37-.48 7.77 1.21 8.64-.63-2.88-.07-9.95-2.03-10.28.46l.63.1 1.01.07zM32.84 64.73c.05-1.88-1.46-.07 0 0zm-14.05-9.75c-.64-3.58-2.43-.54 0 0zm3.35.84c.04-1.15-3.07-1.03 0 0zm1.91.94c-.55-.44-.43.57 0 0zm12.06 7.73c.57-.52-1.35-.38 0 0zm-13.33-9.85c-.33-2.71-3.88-.4 0 0zm-6.87-4.46c-.1-1.25-.67.47 0 0zm1.02-.77c-.17-1.48-.88.19 0 0zm5.65 3.37c2.39-.94-4.35-1.94-.49-.18l.49.18zm75.59 46.69c1.53-1.4-1.94-.43 0 0zm9.13 4.74c.61-1.81-1.54.23 0 0zM23.15 49.82c.26-1.75-1.89.35 0 0zm-8.03-5.38c-.43-2.47-.37-6.82 3.76-5.35-5.51 1.1 3.82 6.85 2.64 2.31 2.32.11 4.53-1.37 3.32.88 4.57-.5 7.73-4.46 12.14-3.91 3.44-.46 7.19-.8 10.89-2.18 3.04-.22 5.97-3.5 4.31-5.44-4.15-.35-8.5.17-13.08 1.08-5.08 1.06-9.7 3.06-14.83 3.93-5 .67 1 1.85-.43 2.11-2.61.9 3.11 1.52-.34 2.47-2.13-.41-4.35-1.14-3.44-3.38-4.79.62-9 2.61-5.21 7.48h.27zm11.54-5.88c1.12-4.14 6.01 3.4 1.84.55-.5-.38-1.32-.68-1.84-.55zm.22-2.01c1.62-1.2.86.68 0 0zm2.06.04c.15-1.9 4.71 1.01.75.68l-.75-.68zm2.81-1.14c1.03-1.2.3 1.07 0 0zm.72-.48c1.71-2.06 9.69-1.31 3.85-.2-1.56-1.18-2.76.7-3.85.2zm10.42-1.6c-.26-5.62 5.18 1.99 0 0zm2.96-.02c1.08-2.83 4.2-1.14.5-.57.08.3-.11 1.46-.5.57zM21.99 48.37c3.23-1.98-3.43-1.72 0 0zm2.39.66c1.13-1.2-2.46-.49 0 0zm-7.04-4.99c1.85-1.42-2.18-.54 0 0zm95.35 59.65c.05-1.65-1.41.74 0 0zM103 97.08c.28-1.9-1.24.16 0 0zm12.36 7.25c2.58.01 7.82-.8 2.2-.8-.88.13-5.13.11-2.2.8zM26.48 47.87c2.09-.14 3.27-2.3-.41-2.18-5.69-.59 5.02 1.95-.73 1.22-.77.51 1.09 1.1 1.14.96zm1.84.93c-.22-1.34-.65.71 0 0zm2.18-5.82c.9-1.12-1.26-.3 0 0zm-6.95-11.6c3.73-1.27 8.82-2.69 10.58.62-1.79-2.15-.72-4.28.97-1.12 2.39 3.19 3.59-1.45 2.03-2.52 1.77 2.2 3.79 3.24 1.19.14 2.83-3.4-5.66.45-7.59.41-.92.41-9.58 2.2-7.18 2.47zm2.19-4.18c2.13-1.6 7.35.96 4-1.59-.33-.3-7.35 1.93-4 1.59zm7.75.32c2.49.06-1.07-3.34 1.89-1.8-.49-1.59-3.45-1.89-4.9-2.52-.82 1.45 1.66 4.34 3.01 4.32zm-6.39-7.04c.86-1.16-1.51.6 0 0zm3.16.76c4.01-.53-1.02-1.72-.81-.04l.81.04zm-5.91-4.62c-2.82-3.69 5.31.62 2.44-3.24-2.41-1.92-4.73 2.16-2.44 3.24zm36.21 19.5c1.29-2.29-5.34-3.09-.87-.81.42.14.32.97.87.81z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <g><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M114 13.9C114 7.3 108.7 2 102.1 2H25.9C19.3 2 14 7.3 14 13.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9V13.9zm-4 .1v99.3c0 4.7-3.5 8.7-8.2 8.7H26.5c-4.7 0-8.5-4-8.5-8.7V14c0-4.7 3.9-8 8.5-8h75.2c4.7 0 8.4 3.6 8.4 8.3l-.1-.3zm-73 94.7l14.1-14.1L37 80.5zm14-60.9V18.4l-13.9.1s.1 45.9.2 45.7C80.1 47.5 77 59.4 77 59.4v49.4l-.1.2H90V59.5c0-27.1-39-11.7-39-11.7zM70 36h14.8c8-10 10.7-17 10.7-17H80.2S75.3 30 70 36z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path fillRule="evenodd" clipRule="evenodd" d="M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703a32.18 32.18 0 00-7.09-2.75c-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337H85.086c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707a57.214 57.214 0 00-4.718-.294c-1.538-.033-3.087-.032-4.618.104a30.16 30.16 0 00-7.158 1.513 23.813 23.813 0 00-7.086 3.865c-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117a324.86 324.86 0 001.546 7.111c.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129a10.979 10.979 0 004.824-2.311c.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336a38.176 38.176 0 002.158 6.428 13.81 13.81 0 003.9 5.185c2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204a49.01 49.01 0 005.387-1.275c3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303a56.542 56.542 0 004.99-1.067c1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692a32.093 32.093 0 01-4.114.097c-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655a63.102 63.102 0 01-.491-4.136 108.067 108.067 0 01-.299-4.62 250.203 250.203 0 01-.197-5.871c-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2a12.392 12.392 0 01-4.798 1.353c-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319a44.368 44.368 0 003.761-1.029c1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11a157.373 157.373 0 01-1.482-6.182 216.117 216.117 0 01-1.464-7.079c-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089a36.66 36.66 0 016.555.923c2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167a116.972 116.972 0 01-2.589 8.17c-.879 2.481-1.893 4.917-2.918 7.343a80.07 80.07 0 01-2.458 5.303c-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331 4.567-.544 1.504-.21 2.978-.638 4.522-.525 1.542.112 2.645 1.284 2.54 2.729zm-22.013-3.353c-.655-.846-1.323-1.682-1.964-2.538-1.006-1.344-1.729-2.845-2.455-4.353-.688-1.429-1.532-2.782-2.257-4.195-1.265-2.465-2.553-4.922-3.718-7.435-1.465-3.157-2.62-6.426-2.984-9.923-.154-1.48-.193-2.958.106-4.424.479-2.341 1.702-4.172 3.758-5.428 1.907-1.165 4.032-1.541 6.209-1.659 1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457-1.346-2.512-3.068-4.777-4.986-6.877-1.421-1.555-2.96-2.998-4.646-4.273-1.658-1.255-3.405-2.376-5.269-3.293-2.223-1.093-4.538-1.938-6.967-2.477-2.334-.518-4.683-.835-7.077-.861-2.042-.022-4.071.07-6.06.531-3.002.695-5.748 1.931-8.137 3.933a21.143 21.143 0 00-3.517 3.77c-1.196 1.643-2.161 3.417-2.986 5.277-1.132 2.552-1.909 5.208-2.44 7.938-.266 1.361-.474 2.734-.686 4.106-.074.48-.08.971-.123 1.521.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149 1.416.043 2.771.323 4.03.943 2.415 1.191 3.828 3.216 4.442 5.779.424 1.769.714 3.573.996 5.372.221 1.405.447 2.825.473 4.242.037 2.071-.068 4.146-.181 6.216a17.386 17.386 0 01-1.08 5.146c-1.12 2.993-2.368 5.937-3.534 8.913-.385.983-.681 2.001-1.045 3.082.562 0 1.018-.004 1.474.002.178.003.36.008.532.049 1.34.316 2.502.923 3.455 1.954 1.271 1.372 1.938 2.973 1.972 4.826.019 1.027-.089 2.057-.084 3.084.021 4.786.057 9.572.097 14.357.007.782.046 1.565.102 2.346.117 1.635.235 3.271.395 4.902.112 1.157.268 2.312.451 3.461.259 1.628 1 3.077 1.841 4.462.724 1.191 1.665 2.203 2.905 2.901 2.107 1.186 4.376 1.285 6.663.848 1.545-.295 3.062-.769 4.562-1.258a10.128 10.128 0 003.937-2.354c1.051-1.019 1.797-2.261 2.3-3.632.976-2.659 1.28-5.459 1.684-8.237.151-1.04.282-2.083.42-3.125.157-1.186.316-2.371.468-3.556.112-.883.214-1.768.322-2.651.154-1.268.317-2.535.464-3.804.113-.981.209-1.966.309-2.949.129-1.256.268-2.512.379-3.77.086-.955.051-1.927.22-2.864.311-1.718 1.123-3.18 2.646-4.125.637-.395 1.356-.655 2.063-.989l-.12-.186zm-57.597-7.052a17.526 17.526 0 01-1.354-5.622c-.128-1.825.089-3.643.276-5.46.182-1.76.333-3.528.386-5.296.088-2.906-.108-5.808-.247-8.712-.084-1.729.117-3.479.271-5.212.139-1.561.312-3.126.607-4.664.495-2.581 1.152-5.125 2.086-7.591.887-2.338 1.906-4.615 3.345-6.665.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358-1.729-.179-3.464-.284-5.198-.387-.532-.032-1.072.04-1.606.091-1.322.126-2.66.176-3.961.424-2.214.421-4.338 1.129-6.305 2.282-1.766 1.035-3.249 2.373-4.491 3.978-1.372 1.772-2.295 3.776-2.958 5.913-.783 2.521-1.156 5.115-1.257 7.733-.088 2.295-.132 4.603.264 6.889.295 1.702.492 3.422.817 5.117.443 2.311.918 4.617 1.467 6.904.785 3.274 1.569 6.553 2.499 9.787.89 3.099 1.894 6.17 2.982 9.204.89 2.476 1.919 4.906 3.003 7.304.706 1.562 1.561 3.065 2.457 4.528.953 1.553 2.037 3.027 3.508 4.154 1.856 1.423 3.293 1.644 5.179.083.808-.669 1.491-1.495 2.194-2.282 1.117-1.25 2.195-2.534 3.307-3.788 1.416-1.598 2.85-3.179 4.273-4.769.301-.336.59-.682.883-1.022l-.484-.425a17.695 17.695 0 01-4.095-5.931zm53.688-47.569a61.488 61.488 0 013.309 4.204c2 2.809 3.598 5.842 4.775 9.087.521 1.43.937 2.874.751 4.439-.129 1.096-.118 2.208-.215 3.31-.081.917-.226 1.829-.345 2.743-.178 1.378-.436 2.752-.513 4.136-.073 1.317.003 2.648.086 3.968.084 1.341.265 2.676.388 4.015.139 1.518.326 3.036.369 4.557.035 1.249-.076 2.506-.185 3.753-.13 1.502-.511 2.956-1.079 4.351-.399.982-.876 1.934-1.327 2.917l.181.192.275.213.277-.496a93.621 93.621 0 006.222-11.493 186.333 186.333 0 003.287-7.766c1.624-4.064 2.909-8.242 3.903-12.503.446-1.913.787-3.855 1.09-5.797.236-1.518.433-3.054.477-4.586.047-1.625-.043-3.263-.193-4.884-.112-1.224-.414-2.456-1.181-3.451-1.233-1.602-2.564-3.134-4.201-4.346-1.378-1.021-2.751-2.068-4.23-2.927-2.345-1.36-4.883-2.266-7.535-2.883-2.588-.603-5.21-.863-7.849-.918-1.556-.033-3.119.134-4.672.28-1.407.132-2.805.357-4.222.543 1.52.855 3.019 1.615 4.433 2.511 2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959 1.028-2.394 1.59-4.916 1.777-7.506.093-1.277.067-2.57.004-3.851a44.628 44.628 0 00-.392-4.259c-.266-1.801-.569-3.603-.995-5.371-.462-1.913-1.627-3.245-3.623-3.736-1.216-.299-2.424-.287-3.653-.093-3.002.473-5.75 1.579-8.31 3.199-.515.326-.798.589-.709 1.328.188 1.565.229 3.155.222 4.735-.01 2.236-.105 4.472-.19 6.707-.028.728-.133 1.452-.211 2.177-.12 1.11-.351 2.219-.344 3.327.007 1.142.124 2.311.401 3.417.88 3.507 2.744 6.377 5.799 8.402 1.879 1.245 3.958 1.873 6.24 1.992.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867.227-.08.461-.165.697-.188.324-.032.654-.008.982-.008 1.182.006 2.319.171 3.295.923.626.482.794 1.122.389 1.779-.575.932-1.452 1.4-2.529 1.49-1.697.141-2.888-.65-3.594-2.129zm47.04-.308c.136-1.124.245-2.251.384-3.375.056-.452-.182-.574-.561-.585-1.192-.033-2.384-.075-3.576-.097-1.344-.024-2.652.192-3.896.703-1.38.568-2.431 1.478-2.86 2.98a9.042 9.042 0 00-.293 3.41 20.11 20.11 0 001.193 5.176c.834 2.221 1.707 4.441 2.75 6.569 1.413 2.881 3.012 5.67 4.513 8.507.401.757.738 1.547 1.156 2.431a13.783 13.783 0 001.351-5.622c.041-1.61-.088-3.227-.182-4.838-.059-.986-.198-1.966-.294-2.95-.134-1.371-.337-2.741-.368-4.115-.031-1.397.068-2.802.188-4.197.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116-1.145.188-2.148-.235-2.894-1.148-.531-.65-.328-1.42.468-1.859.914-.506 1.919-.634 3.104-.711.322.059.807.108 1.268.24.669.189.916.692.672 1.362zm-35.422 37.66c-.655-.535-1.521-.566-2.144.021-.773.73-1.453 1.565-2.133 2.388-.785.951-1.521 1.94-2.534 2.677-1.474 1.071-3.192 1.515-4.919 1.935-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56 2.1.665 4.236.996 6.455.808 1.602-.136 3.128-.485 4.574-1.171 1.99-.943 3.521-2.437 4.823-4.175.218-.29.317-.719.343-1.093.089-1.321-.582-2.303-1.55-3.093zm51.751.526c-1.69.181-3.382.373-5.077.47-.818.047-1.648-.109-2.474-.176-1.385-.112-2.737-.42-3.908-1.16-.678-.427-1.241-.475-1.961-.233-1.028.346-1.867.872-2.115 1.986-.169.753-.23 1.533-.298 2.304-.013.136.157.386.287.42.793.209 1.59.456 2.401.529.996.09 2.01.061 3.013.011 1.083-.054 2.173-.124 3.24-.304 2.515-.422 4.948-1.11 7.109-2.536.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <g><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <g><path d="M101.84 41.72V86l-37.66 22.32-.34.31v16.57l.34.32 53-30.64V33.12l-.5-.12-15 8.36.08.36"></path><path d="M26.4 86.4l37.78 21.92v17.2l-53.4-30.76V33.24l.55-.08 14.91 8.67.16.5V86.4"></path><path d="M26.4 42.32l-15.62-9.08L64.06 2.48l53.16 30.64-15.38 8.6-37.78-21.56L26.4 42.32M30.06 84V65.9l.41.24L45 74.59l.12.07v17.53L30.06 84M83.27 92.6V75l.1-.05 14.27-8.35.44-.26v17.5L83.27 92.6M64.85 103.46l-.41-.42V86l.51-.18 14.27-8.32.44-.25V94.7l-14.8 8.76"></path><path d="M49.8 95.23V77.17l.41.23 14.51 8.45.12 17.61-15.04-8.23M63.29 22.94L48.48 31.7l15.05 8.76 14.8-8.64-15.04-8.88M30.06 60.36V42.55h.41L45 51l.12.33v17.26l-15.06-8.23"></path><path d="M44.86 33.8l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88M83.27 69V51.7l.1-.41L97.64 43l.44.1v17.11L83.27 69"></path><path d="M83 34.21L68.22 43l15.05 8.76 14.8-8.64L83 34.21M64.85 79.85l-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"></path><path d="M49.8 71.63V53.82h.41l14.51 8.45.12.33v17.25L49.8 71.63"></path><path d="M64.6 45.06l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"></path></g>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M-143.76 4.24h119.53v119.53h-119.53z"></path><path d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm19.78-5.41c0 .3-.04.58-.29.72l-9.54 5.8c-.25.15-.45.02-.45-.28v-2.46c0-.3.18-.46.43-.61l9.4-5.62c.25-.15.45-.02.45.28v2.17zm6.56-55.09l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path>
                </svg>
                <svg className='svgIcon' viewBox="0 0 128 128">
                    <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                </svg>
            </div>
        </div>

    )
}

export default Skills;
