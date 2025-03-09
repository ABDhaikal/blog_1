export interface Category {
    created: number; // Timestamp
    name: string; // Name of the category
    ownerId: string | null; // Can be null or a string
    updated: number | null; // Can be null or a timestamp
    objectId: string; // Unique identifier
    views: number; // View count
  }
  