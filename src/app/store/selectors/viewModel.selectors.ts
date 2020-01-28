import { createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, ViewModelState } from '../../app.state';

const selectViewModelState = (state: AppState) => state.viewModel;
export const selectFilteredItems = createSelector(selectViewModelState, (viewModel) => viewModel.filteredItems);
export const selectIsLoading = createSelector(selectViewModelState, (viewModel) => viewModel.isLoading);
export const selectActiveFilter = createSelector(selectViewModelState, (viewModel) => viewModel.activeFilter);

export const selectViewModel: MemoizedSelector<AppState, ViewModelState> = createSelector(
    [selectFilteredItems, selectIsLoading, selectActiveFilter],
    (filteredItems, isLoading, activeFilter) => ({
        filteredItems,
        isLoading,
        activeFilter
    })
);
