export default function Todo(details) {
  const { project, title, description, dueDate, priority } = details;
  this.project = project || "unknown";
  this.title = title || "unknown";
  this.description = description || "unknown";
  this.dueDate = dueDate || "unknown";
  this.priority = priority || "unknown";
}
