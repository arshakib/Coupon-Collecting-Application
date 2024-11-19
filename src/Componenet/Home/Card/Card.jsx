const Card = (data) => {
  const Api = data.data;
  return (
    <div className="w-10/12 mx-auto">
      <div>
        <h1 className="lg:text-3xl sm:text-2xl font-bold text-center mb-8 mt-16">
          The Best Coupons, Promo Codes & Cash Back Offers
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {Api.map(
          (item) =>
            // eslint-disable-next-line react/jsx-key
            item.isSaleOn === true && (
              // eslint-disable-next-line react/jsx-key
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-1/2 rounded-xl"
                    src={item.brand_logo}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.brand_name}</h2>
                  <p>Category : {item.category}</p>
                  <div className="card-actions justify-end">
                    <h1 className="btn btn-primary">
                      Total Coupons : {item.coupons.length}
                    </h1>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Card;
