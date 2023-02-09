import React from "react";
import InputFieald from "../../atoms/Input";
import CustomButton from "../../atoms/Button";
import { useUser } from "../../hooks/useUser";
import { styleInput, seatrchBlocStyle, btn } from "../.././styles/styles";

function SearchBloc() {
  const { setSearchName, handleSubmit } = useUser();
  return (
    <div style={seatrchBlocStyle}>
      <InputFieald
        titelFieald={null}
        placeholder="name"
        type="search"
        handleChange={(e) => setSearchName(e.target.value)}
        style={styleInput}
      />
      <CustomButton
        title="search user"
        variant="secondary"
        style={btn}
        handleClick={handleSubmit}
      />
    </div>
  );
}

export default SearchBloc;
