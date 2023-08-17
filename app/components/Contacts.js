export default function Contacts() {
  return (
    <section id="Contacts" className="min-h-screen" >
      <h2>Contact us</h2>
      <div className="flex justify-between">
        <ul>
          <li>+38 (098) 12 34 567</li>
          <li>+38 (073) 12 34 567</li>
        </ul>
        <p>Phone number</p>
      </div>
      <div className="flex justify-between">
        <p>support@carptravel.com</p>
        <p>E-mail</p>
      </div>
      <div className="flex justify-between">
        <p>Follow us</p>
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>youtube</li>
          <li>tiktok</li>
        </ul>
      </div>
      <form className="flex flex-col">
        <label>Full name</label>
        <input placeholder="John Smith"></input>
        Incorrect name
        <label>E-mail</label>
        <input placeholder="johnsmith@email.com"></input>
        Invalid email
        <label>Message</label>
        <textarea></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
