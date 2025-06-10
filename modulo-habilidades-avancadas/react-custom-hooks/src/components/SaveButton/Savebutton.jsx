
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

function SaveButton() {
    const isOnline = useOnlineStatus();
    
  function handleSaveClick() {
    console.log("Save Clicked!");
  }
  return (
    <>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Save progress" : "Reconnectiong..."}
      </button>
    </>
  );
}

export default SaveButton;
