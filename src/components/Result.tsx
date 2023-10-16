import React from 'react';
import { Model, Param } from './types/types';
import './result.scss';

function Result({
  getParamValue,
  param,
  model,
}: {
  getParamValue: string;
  param: Param;
  model: Model;
}): JSX.Element {
  return (
    <div className="result">
      <p>Id: {param.id}</p>
      <p>Value: {getParamValue(model.paramValues, param.id)}</p>
    </div>
  );
}

export default Result;
