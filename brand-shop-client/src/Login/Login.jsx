import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { FcGoogle } from "react-icons/fc";
  import { BsGithub } from "react-icons/bs";
  import { useContext, useState } from "react";
  import { AuthContext } from "../AuthProvider/AuthProvider";
  import Swal from 'sweetalert2'
  
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setChecked] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  
    const { loginWithEmail, googleLogin, githubLogin } = useContext(AuthContext);
  
    // google 
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        googleLogin()
          .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            navigate(location?.state ? location.state : "/");
          })
          .catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Problem Occurred',
                icon: 'error',
                confirmButtonText: 'Fix'
              });
          });
      };
    // github  
    const handleGithubLogin = (e) => {
        e.preventDefault();
        githubLogin()
          .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            navigate(location?.state ? location.state : "/");
          })
          .catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Problem Occurred',
                icon: 'error',
                confirmButtonText: 'Fix'
              });
          });
      };
  
    const handleLogin = (e)=>{
      e.preventDefault();
      loginWithEmail(email,password)
      .then(userCredentials=>{
        Swal.fire({
            title: 'Success!',
            text: 'Login Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        navigate(location?.state ? location.state : '/')
      })
      .catch(err =>{
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Email or Password',
            icon: 'error',
            confirmButtonText: 'Fix'
          });
      })
  
    }
    return (
      <>
<div className="hero min-h-screen lg:my-4 rounded-lg mb-10 lg:mb-0" style={{backgroundImage: 'url(https://i.ibb.co/CHJr2h1/smartphone-tablets-laptop-wooden-table.jpg)'}}>
  <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
  <div className="hero-content  text-neutral-content">
  <div className="flex mb-10 h-[500px]  mt-12 items-center justify-center">
        <div className="mt-6 lg:ml-5 md:ml-0">
         <form onSubmit={handleLogin}>
         <Card className="w-96 bg-color">
            <CardHeader
              variant="gradient"
              className="mb-4 grid h-28 place-items-center bg-light-blue-100"
            >
              <Typography variant="h3" className="text-black">
                Log In
              </Typography>
            </CardHeader>
            
            <CardBody className="flex flex-col gap-4">
              <Input onChange={(e) => setEmail(e.target.value)} label="Email" className="text-white" type="email" size="lg" required />
              <Input onChange={(e) => setPassword(e.target.value)} label="Password" className="text-white" type={check ? 'text' : 'password'} size="lg" required />
              <div className="-ml-2.5">
                <Checkbox onChange={(e) => setChecked(e.target.checked)} label="Show Password" />
              </div>
            </CardBody>
            <CardFooter className="pt-0 ">
    <button type="submit" className="w-full py-3 text-black bg-gradient-to-r from-[#6574CD] via-[#7F9CF5] to-[#6574CD] rounded-lg">
      Log In
    </button>
  
  
              <Typography variant="small" className="mt-6 flex justify-center text-white">
                Don&apos;t have an account?
                <Link to="/registration">
                  <Typography
                    variant="small"
                    color="black"
                    className="ml-1 font-bold"
                  >
                    Register
                  </Typography>
                </Link>
              </Typography>
              <Typography
                variant="small"
                className="mt-2 flex gap-4 justify-center text-white"
              >
                Login With
                <button onClick={handleGoogleLogin} className="text-2xl">
                  <FcGoogle className=" bg-white rounded-full"></FcGoogle>
                </button>
                <span>or</span>
                <button onClick={handleGithubLogin} className="text-2xl">
                  <BsGithub></BsGithub>
                </button>
              </Typography>
            </CardFooter>
          </Card>
         </form>
        </div>
      </div>
  </div>
</div>
      </>
    );
  };
  
  export default Login;
  