from flask import Flask, request
import mariadb as mdb
import json

def init_db():
    try:
        return mdb.connect(
            host="10.1.1.36",
            port=3306,
            user="andruxa",
            password="password1",
            database="odb"
        )
    except mdb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        return None

app = Flask(__name__)

@app.route("/api/question", methods=["GET", "POST", "PUT", "DELETE"])
def api_question():
    db = init_db()
    if not db:
        return '{"error": "Failed to connect to database"}\n', 500

    cur = db.cursor()

    match request.method:
        case "GET":
            cur.execute("SELECT id, text, survey_id FROM question;")
            result = [{"id": row[0], "text": row[1], "survey_id": row[2]} for row in cur]
            db.close()
            return json.dumps(result)

        case "POST":
            data = request.get_json()
            cur.execute("INSERT INTO question (text, survey_id) VALUES (?, ?);", (data['text'], data['survey_id']))
            db.commit()
            db.close()
            return '{"success": true}\n'

        case "PUT":
            data = request.get_json()
            cur.execute("UPDATE question SET text = ?, survey_id = ? WHERE id = ?;", (data['text'], data['survey_id'], data['id']))
            db.commit()
            db.close()
            return '{"success": true}\n'

        case "DELETE":
            data = request.get_json()
            cur.execute("SELECT id, text, survey_id FROM question WHERE id = ?;", (data['id'],))
            result = [{"id": row[0], "text": row[1], "survey_id": row[2]} for row in cur]
            cur.execute("DELETE FROM question WHERE id = ?;", (data['id'],))
            db.commit()
            db.close()
            return json.dumps(result)
