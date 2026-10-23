
import type { Route } from "./+types/home";

export function meta({} : Route.MetaArgs) {
    
    return [
        { title: "RCBalingbing" },
        { name: "Raymond C. Balingbing", content: "Welcome to my portfolio" },
    ];
}

const Home = () => {

    return(
        <section>
            <h1 className="text-red-200 font-mono">Hi!</h1>
            <p className="font-sans">Test!</p>
        </section>
    );

}

export default Home;