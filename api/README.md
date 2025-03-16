
# Education Dashboard Backend

This is the backend API service for the Education Dashboard application.

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file based on `.env.example` and fill in your database credentials.

3. Start the development server:
   ```
   npm run dev
   ```

## Deployment on Render.com

This backend is configured to be deployed on Render.com using the `render.yaml` file in the root of the project.

### Environment Variables

Make sure to set the following environment variables in your Render dashboard:

- `DB_HOST`: Your MySQL database host
- `DB_USER`: Your MySQL database user
- `DB_PASSWORD`: Your MySQL database password
- `DB_NAME`: Your MySQL database name
- `DB_PORT`: Your MySQL database port (usually 3306)

## API Documentation

### Auth
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Create a new student
- `DELETE /api/students/:id` - Delete a student

### Assessments
- `GET /api/assessments` - Get all assessments
- `POST /api/assessments` - Create a new assessment
- `DELETE /api/assessments/:id` - Delete an assessment
