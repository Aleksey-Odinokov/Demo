function Person(props) {
  const { Firstname, Lastname, Country } = props;

  return (
    <div className="card">
      <h3>
        {Firstname} {Lastname}
      </h3>
      <h4>{Country}</h4>
    </div>
  );
}

export default Person;
