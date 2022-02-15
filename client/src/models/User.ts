export interface UserCreateRequestDTO {
    email: string;
    name: string;
    birthday: Date;
    address1: string;
    address2: string;
    address3: string;
    gender: string;
    position: string;
    role: string;
}
export interface UserSkillDTO {
    name: string;
    rating: number;
}

export interface UserResponseDTO {
    id: number;
    email: string;
    image: string;
    name: string;
    birthday: Date;
    address1: string;
    address2: string;
    address3: string;
    gender: string;
    position: string;
    skills: UserSkillDTO[];
    licenses: string[];
    role: string;
}
