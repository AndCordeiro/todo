export const tasksToDoSelector = (state) => state.tasksToDo ? state.tasksToDo : [];
export const tasksDoingSelector = (state) => state.tasksDoing ? state.tasksDoing : [];
export const tasksDoneSelector = (state) => state.tasksDone ? state.tasksDone : [];
export const lastIdSelector = (state) => state.lastId ? state.lastId : 0;