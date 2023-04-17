import {Menu, Landing, Competencies, Portfolio, Footer, Blog} from './sections';

const App = () => {
    const menuItems = [
        { href: '#competencies', label: 'competencies' },
        { href: '#portfolio', label: 'portfolio' },
        
        { href: '#blog', label: 'journal' },
    ];

    const reveal = () => {
        let reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 30;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);

    return (
        <div className='app'>
            <Menu menuItems={menuItems} />
            <div className='content'>
                <Landing />
                <Competencies />
                <Portfolio />
                <Blog />
            </div>
            <Footer />
        </div>
    )
};

export default App;