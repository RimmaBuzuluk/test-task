import classNames from 'classnames';

export const OwnerFilterItem = ({
  user,
  selectedFilterUser,
  setSelectedFilterUser,
}) => {
  const handleFilterChange = () => {
    setSelectedFilterUser(user.id);
  };

  return (
    <a
      data-cy="FilterAllUsers"
      href="#/"
      onClick={handleFilterChange}
      className={classNames({ 'is-active': selectedFilterUser === user.id })}
    >
      {user.id ? `${user.name}` : 'All'}
    </a>
  );
};
