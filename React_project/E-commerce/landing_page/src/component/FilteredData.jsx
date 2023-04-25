import { MdStarRate } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
export const All = ({ data }) => {
  return  data.map((dat) => {
    return (
      <>
        <div className="card">
          <img src={dat.image} alt="" />
          <div className="card-desc">
            <h5>{dat.title.substring(0, 20)}</h5>
            <p className="rate">
              <MdStarRate />
            </p>
            <p>
              <b>{dat.rating.rate}</b>({dat.rating.count})
            </p>
          </div>
          <div className="card-desc1">
            <p className="cat">{dat.category}</p>
            <p className="price">${dat.price}</p>
          </div>
          <div className="btn-pur">
            <BsFillBagCheckFill className="bag" />
            <button className="btn-purchase">Purchase Now</button>
          </div>
        </div>
      </>
    );
  });
};
export const Men = ({ data }) => {
  return data
    .filter((dat1) => dat1.category === "men's clothing")
    .map((dat) => {
      return (
        <>
          <div className="card">
            <img src={dat.image} alt="" />
            <div className="card-desc">
              <h5>{dat.title.substring(0, 20)}</h5>
              <p className="rate">
                <MdStarRate />
              </p>
              <p>
                <b>{dat.rating.rate}</b>({dat.rating.count})
              </p>
            </div>
            <div className="card-desc1">
              <p className="cat">{dat.category}</p>
              <p className="price">${dat.price}</p>
            </div>
            <div className="btn-pur">
              <BsFillBagCheckFill className="bag" />
              <button className="btn-purchase">Purchase Now</button>
            </div>
          </div>
        </>
      );
    });
};

export const Jewerly = ({ data }) => {
  return data
    .filter((dat1) => dat1.category === "jewelery")
    .map((dat) => {
      return (
        <>
          <div className="card">
            <img src={dat.image} alt="" />
            <div className="card-desc">
              <h5>{dat.title.substring(0, 20)}</h5>
              <p className="rate">
                <MdStarRate />
              </p>
              <p>
                <b>{dat.rating.rate}</b>({dat.rating.count})
              </p>
            </div>
            <div className="card-desc1">
              <p className="cat">{dat.category}</p>
              <p className="price">${dat.price}</p>
            </div>
            <div className="btn-pur">
              <BsFillBagCheckFill className="bag" />
              <button className="btn-purchase">Purchase Now</button>
            </div>
          </div>
        </>
      );
    });
};
export const Electronics = ({ data }) => {
  return data
    .filter((dat1) => dat1.category === "electronics")
    .map((dat) => {
      return (
        <>
          <div className="card">
            <img src={dat.image} alt="" />
            <div className="card-desc">
              <h5>{dat.title.substring(0, 20)}</h5>
              <p className="rate">
                <MdStarRate />
              </p>
              <p>
                <b>{dat.rating.rate}</b>({dat.rating.count})
              </p>
            </div>
            <div className="card-desc1">
              <p className="cat">{dat.category}</p>
              <p className="price">${dat.price}</p>
            </div>
            <div className="btn-pur">
              <BsFillBagCheckFill className="bag" />
              <button className="btn-purchase">Purchase Now</button>
            </div>
          </div>
        </>
      );
    });
};

export const Women = ({ data }) => {
  return data
    .filter((dat1) => dat1.category === "women's clothing")
    .map((dat) => {
      return (
        <>
          <div className="card">
            <img src={dat.image} alt="" />
            <div className="card-desc">
              <h5>{dat.title.substring(0, 20)}</h5>
              <p className="rate">
                <MdStarRate />
              </p>
              <p>
                <b>{dat.rating.rate}</b>({dat.rating.count})
              </p>
            </div>
            <div className="card-desc1">
              <p className="cat">{dat.category}</p>
              <p className="price">${dat.price}</p>
            </div>
            <div className="btn-pur">
              <BsFillBagCheckFill className="bag" />
              <button className="btn-purchase">Purchase Now</button>
            </div>
          </div>
        </>
      );
    });
};
