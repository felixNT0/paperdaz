import spinnerIcon from "../../assets/spinnerIcon.svg";

function NotificationModal() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-10">
      <img src={spinnerIcon} alt="spinnerIcon" className="w-14 mb-7" />
      <p className="">This is in works, check out Paperdaz Lab!</p>
    </div>
  );
}

export default NotificationModal;
