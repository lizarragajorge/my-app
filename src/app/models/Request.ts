export class Request
{
    public firstName: string;
    public lastName: string;
    public message: string;

    public constructor(firstName: string, lastName: string, message: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.message = message;
    }
}