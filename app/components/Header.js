export default function Header() {
  return (
    <header className="flex justify-between">
      <div>CarpTravel</div>
      <nav className="flex gap-x-14">
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Career">Career</a>
        <a href="#Gallery">Gallery</a>
        <a href="#Contacts">Contacts</a>
      </nav>
    </header>
  );
}
