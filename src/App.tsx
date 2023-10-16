import { useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Input from './components/Input';
import Result from './components/Result';
import { Model, Param, ParamValue } from './components/types/types';

  // Initial values
const initParams: Param[] = [
  {
    id: 1,
    name: 'Назначение',
  },
  {
    id: 2,
    name: 'Длина',
  },
];

const initModels: ParamValue = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ],
};
  //

function App(): JSX.Element {
  const [model, setModel] = useState<Model>(initModels);
  const [showModel, setShowModel] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    setModel((model) => ({
      ...model,
      paramValues: [
        ...model.paramValues.map((paramValue) => {
          if (paramValue.paramId === id) {
            paramValue.value = event.target.value;
          }
          return paramValue;
        }),
      ],
    }));
  };

  const getParamValue = (paramValues: ParamValue[], id: number) => {
    const paramValue = paramValues.find(
      (paramValue) => paramValue.paramId === id,
    );

    return paramValue?.value;
  };

const displayModel = () : void => {
  setShowModel(prev => !prev)
}

  return (
    <>
      <div>
        <a href="https://selsup.ru/">
          <img
            src="https://selsup.ru/wp-content/webp-express/webp-images/themes/selsup/i/logo.png.webp"
            className="logo"
            alt="selsup"
          />
        </a>
      </div>
      <h2>Изменение параметров</h2>
      <div className="card">
      {initParams.map((param) =>
        <div className='input-box' key={param.id}>
        <Input handleChange={handleChange} getParamValue={getParamValue} param={param} model={model}/>
        </div>
        )}
        <Button displayModel={displayModel} showModel={showModel}/>
      </div>
      {showModel && (initParams.map((param) =>
      <div key={param.id}>
        <Result getParamValue={getParamValue} param={param} model={model}/>
      </div>
      ))}
    </>
  );
}

export default App;
