
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';
            
            // Hide all answers
            faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none');
            
            // Toggle the clicked answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});