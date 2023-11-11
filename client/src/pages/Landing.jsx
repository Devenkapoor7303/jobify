import Wrapper from '../assets/wrappers/LandingPage';
import main from "../assets/images/main.svg";
import { Link } from 'react-router-dom';
import { Logo } from "../Components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            doloribus quis ut aspernatur placeat rerum rem quam totam saepe, est
            quia inventore culpa natus deleniti quas provident dolores molestias
            voluptatem? Corporis nemo eligendi saepe perspiciatis aspernatur,
            illo nam doloremque repudiandae quasi corrupti eveniet, dolores aut
            dicta perferendis expedita aperiam animi inventore, totam laboriosam
            ab vero? Nesciunt soluta natus similique quasi?
          </p>
          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/login" className="btn">Login/Demo User</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'></img>
      </div>
    </Wrapper>
  );
}
export default Landing