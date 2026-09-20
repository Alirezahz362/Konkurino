import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container py-5 text-center">
        <h2>صفحه ثبت نام کنکورینو</h2>
        <p className="text-muted">
          قبلا ثبت نام کردید؟<Link to="/login">وارد شوید</Link>
        </p>
      </div>
    </>
  );
};
export default Register;
