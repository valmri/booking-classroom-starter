import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { Reservation } from "../../utils/types";
import useReservation from "../../hooks/useReservation";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ReservationStackParamList } from "../../navigation/ReservationNavigation";

type Props = {
  reservation: Reservation;
  onDelete?: () => void;
};

const ReservationCard = ({ reservation, onDelete }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ReservationStackParamList>>();

  const { deleteReservation } = useReservation();

  async function handleDelete() {
    await deleteReservation(reservation.id);
    if (onDelete) onDelete();
  }

  function handleUpdate() {
    navigation.navigate("ReservationInfo", { reservation });
  }

  return (
    <Card style={{ marginVertical: 8, padding: 12 }}>
      <Card.Title title={`Réservation #${reservation.id}`} />
      <Card.Content>
        <Text>
          Date de début : {new Date(reservation.startTime).toLocaleString()}
        </Text>
        <Text>
          Date de fin : {new Date(reservation.endTime).toLocaleString()}
        </Text>
        <Text>ID salle : {reservation.classroomId}</Text>
        <Text>ID utilisateur : {reservation.userId}</Text>
        <Card.Content>
          <Button mode="outlined" onPress={handleDelete}>
            Supprimer la réservation
          </Button>
          <Button mode="outlined" onPress={handleUpdate}>
            Information sur la réservation
          </Button>
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

export default ReservationCard;
