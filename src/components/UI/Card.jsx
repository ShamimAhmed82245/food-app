const Card = (props) => {
  return (
    <div className="bg-white	w-4/5	h-auto	mx-auto rounded-lg	p-8">
      {props.children}
    </div>
  );
};

export default Card;
