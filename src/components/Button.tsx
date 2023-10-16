import React from 'react';
import './button.scss';

function Button({ displayModel, showModel }: { displayModel: void, showModel: boolean }): JSX.Element {
  return (
    <div>
      <button className="button" onClick={displayModel}>
        {!showModel ? 'Показать параметры' : 'Скрыть'}
      </button>
    </div>
  );
}

export default Button;
