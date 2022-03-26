import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="conatiner page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
            imperdiet lectus, non volutpat purus volutpat nec. Nulla ornare
            sollicitudin laoreet. Suspendisse congue tempor maximus. Donec
            venenatis, quam sed ultrices accumsan, ante risus molestie mauris,
            id efficitur ipsum augue vitae lorem. Aenean feugiat sollicitudin
            urna, vitae rutrum nisl placerat vitae. Cras luctus id lorem ut
            finibus. Nulla vestibulum, justo id finibus aliquet, quam elit
            volutpat mauris, ac fermentum dui ex in libero. Morbi et dapibus
            dui.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
      </div>
    </main>
  );
};
export default Landing;
