import { Link } from "react-router-dom"
import Links from "./components/Links"


export default function Three() {
    return (
        <div id="form" className="form-container flex flex-col justify-end">
            <h1>Do you have any of the following symptoms?</h1>
            <div className="flex flex-col">
                <input type="checkbox" id="cough" name="cough" value="cough" className="ml-auto mr-0 translate-y-10 checkbox" />
                <label for="cough" className="form-text">Cough</label>
                <input type="checkbox" id="fever" name="fever" value="fever" className="ml-auto mr-0 translate-y-10 checkbox" />
                <label for="fever" className="form-text">Fever</label>
                <input type="checkbox" id="shortness of breath" name="shortness of breath" value="shortness of breath" className="ml-auto mr-0 translate-y-10 checkbox"/>
                <label for="shortness of breath" className="form-text">Shortness of breath</label>
                <input type="checkbox" id="fatigue" name="fatigue" value="fatigue" className="ml-auto mr-0 translate-y-10 checkbox"/>
                <label for="fatigue" className="form-text">Fatigue</label>
                <input type="checkbox" id="muscle or body aches" name="muscle or body aches" value="muscle or body aches"className="ml-auto mr-0 translate-y-10 checkbox" />
                <label for="muscle or body aches" className="form-text">Muscle or body aches</label>
                <input type="checkbox" id="headache" name="headache" value="headache" className="ml-auto mr-0 translate-y-10 checkbox"/>
                <label for="headache" className="form-text">Headache</label>
                <input type="checkbox" id="new loss of taste or smell" name="new loss of taste or smell" value="new loss of taste or smell" className="ml-auto mr-0 translate-y-10 checkbox" />
                <label for="new loss of taste or smell" className="form-text">New loss of taste or smell</label>
                <input type="checkbox" id="sore throat" name="sore throat" value="sore throat"className="ml-auto mr-0 translate-y-10 checkbox" />
                <label for="sore throat" className="form-text">Sore throat</label>
                <input type="checkbox" id="congestion or runny nose" name="congestion or runny nose" value="congestion or runny nose" className="ml-auto mr-0 translate-y-10 checkbox"/>
                <label for="congestion or runny nose" className="form-text">Congestion or runny nose</label>
                <input type="checkbox" id="nausea or vomiting" name="nausea or vomiting" value="nausea or vomiting"className="ml-auto mr-0 translate-y-10 checkbox" />
                <label for="nausea or vomiting" className="form-text">Nausea or vomiting</label>
                <input type="checkbox" id="diarrhea" name="diarrhea" value="diarrhea" className="ml-auto mr-0 translate-y-10 checkbox"/>
                <label for="diarrhea" className="form-text">Diarrhea</label>
            </div>
            <div id='navbar' className="flex flex-row space-x-3">
                <Links />
            </div>
        </div>
    )
}