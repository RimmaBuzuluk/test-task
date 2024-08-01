import { OwnerFilterItem } from '../OwnerFilterItem/OwnerFilterItem';

export const UserFilterBlock = ({
  users,
  selectedFilterUser,
  setSelectedFilterUser,
  query,
  setQuery,
}) => {
  const userFilter = [{ id: '', name: 'All' }, ...users];

  const reset = () => {
    setQuery('');
    setSelectedFilterUser('');
  };

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs has-text-weight-bold">
        {userFilter.map(userI => (
          <OwnerFilterItem
            user={userI}
            key={userI.id}
            selectedFilterUser={selectedFilterUser}
            setSelectedFilterUser={setSelectedFilterUser}
          />
        ))}
      </p>

      <div className="panel-block">
        <p className="control has-icons-left has-icons-right">
          <input
            data-cy="SearchField"
            type="text"
            className="input"
            placeholder="Search"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
          {query !== '' && (
            <span className="icon is-right">
              <button
                data-cy="ClearButton"
                type="button"
                className="delete"
                onClick={() => setQuery('')}
              />
            </span>
          )}
        </p>
      </div>

      <div className="panel-block is-flex-wrap-wrap">
        <a
          href="#/"
          data-cy="AllCategories"
          className="button is-success mr-6 is-outlined"
        >
          All
        </a>

        <a data-cy="Category" className="button mr-2 my-1 is-info" href="#/">
          Category 1
        </a>

        <a data-cy="Category" className="button mr-2 my-1" href="#/">
          Category 2
        </a>

        <a data-cy="Category" className="button mr-2 my-1 is-info" href="#/">
          Category 3
        </a>
        <a data-cy="Category" className="button mr-2 my-1" href="#/">
          Category 4
        </a>
      </div>

      <div className="panel-block">
        <a
          data-cy="ResetAllButton"
          href="#/"
          className="button is-link is-outlined is-fullwidth"
          onClick={reset}
        >
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
