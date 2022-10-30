const Contact = () => {
    return (
        <div className="contact--container" id="contact">
            <h2 className="contact--title">Contact</h2>
            <form 
                name="contact v1"
                className="contact--form" 
                method="POST"
                data-netlify="true"
                >
                <input type="hidden" name="form-name" value="contact"/>


                <div className="form--inputs">
                        <input type='text' name='name' placeholder="Name"/>
                </div>
                <div className="form--inputs">
                        <input type='email' name='email' placeholder="Email"/>
                </div>
                <div className="form--inputs">
                        <textarea name='message' placeholder="Message"></textarea>
                </div>
                <button type="submit">Contact</button>
            </form>
            
        </div>
    )
}

export default Contact