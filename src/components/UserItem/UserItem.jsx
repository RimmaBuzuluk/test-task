import classNames from 'classnames';

export const UserItem = ({ user }) => (
  <tr data-cy="Product">
    <td className="has-text-weight-bold" data-cy="ProductId">
      {user.productId}
    </td>

    <td data-cy="ProductName">{user.productName}</td>
    <td data-cy="ProductCategory">
      {user.categoryIcon}- {user.categoryName}
    </td>

    <td
      data-cy="ProductUser"
      className={classNames({
        'has-text-link': user.userSex === 'm',
        'has-text-danger': user.userSex === 'f',
      })}
    >
      {user.userName}
    </td>
  </tr>
);
