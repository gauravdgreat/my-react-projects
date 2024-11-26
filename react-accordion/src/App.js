import Accordion from "./components/Accordion";
import "./App.css"

function App() {
    const accordionData = [
        { title: "Hello", content: "This is me Gaurav" },
        { title: "Section 2", content: "Content for section 2" },
        { title: "Section 3", content: "Content for section 3" },
    ];

    return (
        <div className="App">
            <h1>React Accordion</h1>
            {accordionData.map((item, index) => (
                <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
}

export default App;
