const Contact = () => {
  return (
    <div className="contact--container" id="contact">
      <h2 className="section--title-inverse">Contact</h2>
      <div className="row">
      <form
        name="contact v1"
        className="contact--form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="form--inputs">
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="form--inputs">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form--inputs">
          <textarea name="message" placeholder="Message"></textarea>
        </div>
        <div className="contact--button-container">
          <button type="submit">Contact</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
