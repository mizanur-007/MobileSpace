import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [check, setChecked] = useState("");

  const passwordRegEx6c = /^.{6,}$/;
  const passwordRegExCapital = /^(?=.*[A-Z]).+$/;
  const passwordRegExSpecial = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\-]).+$/;
  
    const { createUser, handleUpdateProfile, googleLogin,githubLogin } = useContext(AuthContext);

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

  const handleRegister = (e) => {
    e.preventDefault();
    if(!passwordRegEx6c.test(password)){
        Swal.fire({
            title: 'Error!',
            text: 'Password must be atleast 6 characters',
            icon: 'error',
            confirmButtonText: 'Fix'
          });
      return;
    }
    else if(!passwordRegExCapital.test(password)){
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain one capital letter',
            icon: 'error',
            confirmButtonText: 'Fix'
          });
      return;
    }
    else if(!passwordRegExSpecial.test(password)){
        Swal.fire({
            title: 'Error!',
            text: 'Password must contain one special character',
            icon: 'error',
            confirmButtonText: 'Fix'
          })
      return;
    }

      if (check) {
        createUser(email, password)
              .then(res => {
                handleUpdateProfile(name, photo)
                      .then(() => {
                        Swal.fire({
                            title: 'Great!',
                            text: 'Registration Successful',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                          navigate('/')
  
                      })
              })
              .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Fix'
                  })
              })
        }
  };
  return (
    <>
      <div
        className="hero h-[700px] my-4 rounded-lg"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/6DHLpvR/online-video-calling-profile-interface.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 rounded-lg"></div>
        <div className="hero-content  text-neutral-content">
          <div className="flex mb-10 h-[500px]  my-12 items-center justify-center">
            <div className="mt-6 lg:ml-5 md:ml-0">
              <form onSubmit={handleRegister}>
                <Card className="w-96 bg-color">
                  <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-28 place-items-center bg-pink-500"
                  >
                    <Typography variant="h3" className="text-black">
                      Registration
                    </Typography>
                  </CardHeader>

                  <CardBody className="flex flex-col gap-4">
                  <Input
                required
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  className="text-white"
                  type="text"
                  size="lg"
                  
                />
                <Input
                required
                  onChange={(e) => setPhoto(e.target.value)}
                  label="Image URL"
                  className="text-white"
                  type="text"
                  size="lg"
                  
                />
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      label="Email"
                      className="text-white"
                      type="email"
                      size="lg"
                      required
                    />
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      label="Password"
                      className="text-white"
                      type="password"
                      size="lg"
                      required
                    />
                                    <div className="-ml-2.5">
                  <Checkbox
                    
                    required
                    onChange={(e) => setChecked(e.target.checked)}
                    label="Accepts Terms and Conditions"
                  />
                </div>
                  </CardBody>
                  <CardFooter className="pt-0 ">
                    <button
                      type="submit"
                      className="w-full py-3 text-black bg-gradient-to-r from-[#DB2777] via-[#f576af] to-[#a40f52] rounded-lg"
                    >
                      Register
                    </button>

                    <Typography
                      variant="small"
                      className="mt-6 flex justify-center text-white"
                    >
                      Have an account?
                      <Link to="/login">
                        <Typography
                          variant="small"
                          color="blue"
                          className="ml-1 font-bold"
                        >
                          Login
                        </Typography>
                      </Link>
                    </Typography>
                    <Typography
                      variant="small"
                      className="mt-2 flex gap-4 justify-center text-white"
                    >
                      Login With
                      <button onClick={handleGoogleLogin} className="text-2xl">
                        <FcGoogle className="text-white bg-white rounded-full"></FcGoogle>
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

export default Registration;
