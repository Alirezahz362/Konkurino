
export default function NewCarousel(){

    return (
      <>
        {/* <!--******************************** CAROUSEL************************************ --> */}
        <div
          className="carousel slide"
          id="slider"
          data-interval="300"
          data-bs-ride="carousel"
        >
          {/* <!--Indicators --> */}
          <div className="carousel-indicators">
            <button
              className="active"
              data-bs-slide-to="0"
              data-bs-target="slider"
            ></button>
            <button data-bs-slide-to="1" data-bs-target="slider"></button>
            <button data-bs-slide-to="2" data-bs-target="slider"></button>
          </div>
          {/* <!-- carousel Item --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="\img\clay-banks-u27Rrbs9Dwc-unsplash.jpg"
                className="d-block w-100 img-fluid"
                alt=""
              />
            </div>
            <div className="carousel-item active">
              <img
                src="/img/lin-mei-NYyCqdBOKwc-unsplash.jpg"
                className="d-block w-100 img-fluid"
                alt=""
              />
            </div>
            <div className="carousel-item active">
              <img
                src="/img/manuel-cosentino-n--CMLApjfI-unsplash.jpg"
                className="d-block w-100 img-fluid"
                alt=""
              />
            </div>
          </div>
          {/* <!-- carousel nav --> */}
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#slider"
          >
            {/* <!-- <span className="carousel-control-prev-icon">
                      <span className="visually-hidden">previous</span>  
                    </span> --> */}
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#slider"
          >
            {/* <!-- <span className="carousel-control-next-icon">
                      <span className="visually-hidden">next</span>  
                    </span> --> */}
          </button>
        </div>
      </>
    );
}