from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def getNotes(request):
  notes = Note.objects.all();
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data);

@api_view(['GET'])
def getNote(request, pk):
  note = Note.objects.get(id=pk);
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data);
