import React from 'react';
import './input.scss';
import { Model, Param, ParamType } from './types/types';

function Input({
  handleChange,
  getParamValue,
  param,
  model
}: {
  handleChange: void;
  getParamValue: string;
  param: Param;
  model: Model;
}): JSX.Element {
  return (
    <div className="input">
      <div className="params">{param.name}</div>
      <input
        type={ParamType.string}
        value={getParamValue(model.paramValues, param.id)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event, param.id)
        }
        placeholder="Введите изменения"
      />
    </div>
  );
}

export default Input;
