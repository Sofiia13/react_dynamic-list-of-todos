import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <tr data-cy="todo" className="">
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered">
        {todo.completed ? (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        ) : (
          ''
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p className={todo.completed ? `has-text-success` : `has-text-danger`}>
          {todo.title}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button data-cy="selectButton" className="button" type="button">
          <span className="icon">
            <i className="far fa-eye" />
          </span>
        </button>
      </td>
    </tr>
    //   <tr data-cy="todo" className="">
    //   <td className="is-vcentered">8</td>
    //   <td className="is-vcentered">
    //     <span className="icon" data-cy="iconCompleted">
    //       <i className="fas fa-check" />
    //     </span>
    //   </td>
    //   <td className="is-vcentered is-expanded">
    //     <p className="has-text-success">quo adipisci enim quam ut ab</p>
    //   </td>
    //   <td className="has-text-right is-vcentered">
    //     <button data-cy="selectButton" className="button" type="button">
    //       <span className="icon">
    //         <i className="far fa-eye" />
    //       </span>
    //     </button>
    //   </td>
    // </tr>
  );
};
