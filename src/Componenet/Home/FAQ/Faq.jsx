const Faq = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold mt-16 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can RetailMeNot save me money when shopping online?
        </div>
        <div className="collapse-content">
          <p>
            RetailMeNot offers several ways for shoppers to save while shopping.
            We feature up-to-date coupon codes, free shipping offers, sales and
            promo codes for thousands of stores and restaurants. Plus, our cash
            back offers pay you to shop! Activate a cash back offer, shop, check
            out, and we will pay you back a percentage of what you spent.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How many online stores does RetailMeNot have coupons & promo codes
          for?
        </div>
        <div className="collapse-content">
          <p>
            RetailMeNot has coupons and promo codes for nearly 20,000 stores,
            brands and restaurants. Our team is constantly verifying the offers
            on our site to ensure you save money on every purchase.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Does RetailMeNot provide cash back for online purchases?
        </div>
        <div className="collapse-content">
          <p>
            Yes. RetailMeNot has cash back offers for nearly 3,800 stores. You
            can access these cash back offers on our site, via our app or
            through our free browser extension. Simply sign up for a RetailMeNot
            account, activate the cash back offers you want to use, shop and
            check out as normal – we will give you a percentage of what you
            spent back in your RetailMeNot wallet. From there, you can redeem
            your cash back through Venmo or PayPal and use it on … whatever you
            want. And yes - our cash back offers stack with promo codes, too.
            Note: A minimum approved balance of $5.01 is required for a
            redemption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
