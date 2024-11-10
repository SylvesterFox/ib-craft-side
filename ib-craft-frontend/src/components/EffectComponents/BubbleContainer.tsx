import { useEffect } from "react";


function BubbleBackground() {
    useEffect(() => {
        const bubbleContainer = document.getElementById('bubble-container');

        for (let i = 0; i < 20; i++) {
            const bubble = document.createElement('div');
            bubble.className = "bubble";

            const size = Math.random() * 40 + 10 + 'px';
            bubble.style.width = size;
            bubble.style.height = size;

            bubble.style.left = Math.random() * 100 + 'vw'; // Позиция от 0 до 100% ширины экрана
            bubble.style.bottom = Math.random() * 100 + 'vh'; // Начальная позиция от 0 до 100% высоты


            bubble.style.animationDuration = Math.random() * 3 + 4 + 's'; // Длительность от 4 до 7 секунд
             


            if (bubbleContainer != null) {
                bubbleContainer.appendChild(bubble);
            }

        }
    }, []);

    return <div id="bubble-container" className="bubble_background"></div>;
}

export default BubbleBackground;