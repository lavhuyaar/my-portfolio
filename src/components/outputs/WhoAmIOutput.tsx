import { whoAmI } from "../../data/aboutMe";

const WhoAmIOutput = () => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-bold">WHO AM I?</h3>
      <br />
      <div className="flex flex-col w-full pl-3 sm:pl-6">
        {whoAmI.map((content) => (
          <>
            {content.map((nestedContent) => (
              <p key={nestedContent}>{nestedContent}</p>
            ))}
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
export default WhoAmIOutput;
