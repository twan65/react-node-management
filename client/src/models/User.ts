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
    id: number;
    name: string;
    rating: number;
}

export interface UserLicenseDTO {
    id: number;
    name: string;
}

export interface UserResponseDTO {
    id: number;
    email: string;
    image_path: string;
    name: string;
    birthday: Date;
    address1: string;
    address2: string;
    address3: string;
    gender: string;
    position: string;
    skills: UserSkillDTO[];
    licenses: UserLicenseDTO[];
    role: string;
}
