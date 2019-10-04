export class Character {
    _id: string; // Underscore and String used by MongoDB
    character_name: string;
    character_description: string;
    character_level: number;
    updated_at: Date;
}