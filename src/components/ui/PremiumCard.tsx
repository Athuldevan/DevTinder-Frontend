import { axiosInstance } from "../../lib/axios";
declare global {
  interface Window {
    Razorpay: any;
  }
}
const PremiumCard = () => {
  const handleBuyPremium = async function (plan: string, amount: number) {
    try {
      const { data } = await axiosInstance.post("/payment/create", {
        plan,
      });
      console.log(data.data);
      console.log(data.data.key_id)
      const options = {
        key: data.data.key_id, 
        amount: data.data.amount,
        currency: "INR",
        name: "Devtinder",
        description: "Connect to other devloper",
        order_id: data.data.orderId, // This is the order_id
        prefill: {
          name: data.data.notes.firstName,
          email: data.data.email,
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp = new window.Razorpay(options);
    rzp.open();
    
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div className=" p-8 flex w-full flex-col lg:flex-row">
      <div className="card bg-base-300 rounded-box grid h-96 grow">
        <h2 className="items-center d-flex justify-center">
          <b>
            Silver Membership <br />
          </b>
          <b>50000</b>
        </h2>
        <ul>
          <li>Chat Feature</li>
          <li>Send Infinte connection request</li>
        </ul>
        <button
          onClick={() => handleBuyPremium("premium", 60000)}
          className="btn btn-secondary"
        >
          Buy
        </button>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="card bg-base-300 rounded-box grid h-96 grow place-items-center">
        Gold Membership
        <b>60000</b>
      </div>
    </div>
  );
};

export default PremiumCard;
